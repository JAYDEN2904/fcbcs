import React, { useState } from 'react';

interface FormData {
  surname: string;
  firstName: string;
  middleName: string;
  dateOfBirth: string;
  sex: string;
  hometown: string;
  nationality: string;
  religion: string;
  previousSchool: string;
  hasSpecialCondition: string;
  specialConditionDetails: string;
  fatherName: string;
  fatherAddress: string;
  fatherPhone: string;
  motherName: string;
  motherAddress: string;
  motherPhone: string;
  guardianName: string;
  guardianAddress: string;
  guardianPhone: string;
}

export default function ApplicationForm() {
  const [formData, setFormData] = useState<FormData>({
    surname: '',
    firstName: '',
    middleName: '',
    dateOfBirth: '',
    sex: '',
    hometown: '',
    nationality: '',
    religion: '',
    previousSchool: '',
    hasSpecialCondition: '',
    specialConditionDetails: '',
    fatherName: '',
    fatherAddress: '',
    fatherPhone: '',
    motherName: '',
    motherAddress: '',
    motherPhone: '',
    guardianName: '',
    guardianAddress: '',
    guardianPhone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="pt-24 pb-16 px-6 sm:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Student Application Form</h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Student Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Student Information</h3>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
                  Surname
                </label>
                <input
                  type="text"
                  name="surname"
                  id="surname"
                  required
                  value={formData.surname}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  id="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="middleName" className="block text-sm font-medium text-gray-700">
                  Middle Name
                </label>
                <input
                  type="text"
                  name="middleName"
                  id="middleName"
                  value={formData.middleName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  id="dateOfBirth"
                  required
                  value={formData.dateOfBirth}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="sex" className="block text-sm font-medium text-gray-700">
                  Sex
                </label>
                <select
                  name="sex"
                  id="sex"
                  required
                  value={formData.sex}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                >
                  <option value="">Select sex</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div>
                <label htmlFor="hometown" className="block text-sm font-medium text-gray-700">
                  Hometown/Region
                </label>
                <input
                  type="text"
                  name="hometown"
                  id="hometown"
                  required
                  value={formData.hometown}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="nationality" className="block text-sm font-medium text-gray-700">
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  id="nationality"
                  required
                  value={formData.nationality}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="religion" className="block text-sm font-medium text-gray-700">
                  Religion
                </label>
                <select
                  name="religion"
                  id="religion"
                  required
                  value={formData.religion}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                >
                  <option value="">Select religion</option>
                  <option value="christianity">Christianity</option>
                  <option value="islam">Islam</option>
                  <option value="others">Others</option>
                </select>
              </div>

              <div>
                <label htmlFor="previousSchool" className="block text-sm font-medium text-gray-700">
                  Previous School Attended
                </label>
                <input
                  type="text"
                  name="previousSchool"
                  id="previousSchool"
                  required
                  value={formData.previousSchool}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="hasSpecialCondition" className="block text-sm font-medium text-gray-700">
                  Do you have any special sickness or disability you wish to bring to notice of the school?
                </label>
                <select
                  name="hasSpecialCondition"
                  id="hasSpecialCondition"
                  required
                  value={formData.hasSpecialCondition}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                >
                  <option value="">Select option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {formData.hasSpecialCondition === 'yes' && (
                <div>
                  <label htmlFor="specialConditionDetails" className="block text-sm font-medium text-gray-700">
                    Please specify:
                  </label>
                  <textarea
                    name="specialConditionDetails"
                    id="specialConditionDetails"
                    required
                    value={formData.specialConditionDetails}
                    onChange={handleChange}
                    rows={3}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Parent/Guardian Information */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900">Parent/Guardian Information</h3>

            {/* Father's Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900">Father's Information</h4>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="fatherName" className="block text-sm font-medium text-gray-700">
                    Father's Name
                  </label>
                  <input
                    type="text"
                    name="fatherName"
                    id="fatherName"
                    required
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="fatherPhone" className="block text-sm font-medium text-gray-700">
                    Father's Phone Number
                  </label>
                  <input
                    type="tel"
                    name="fatherPhone"
                    id="fatherPhone"
                    required
                    value={formData.fatherPhone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="fatherAddress" className="block text-sm font-medium text-gray-700">
                    Father's Address
                  </label>
                  <textarea
                    name="fatherAddress"
                    id="fatherAddress"
                    required
                    value={formData.fatherAddress}
                    onChange={handleChange}
                    rows={2}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Mother's Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900">Mother's Information</h4>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="motherName" className="block text-sm font-medium text-gray-700">
                    Mother's Name
                  </label>
                  <input
                    type="text"
                    name="motherName"
                    id="motherName"
                    required
                    value={formData.motherName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="motherPhone" className="block text-sm font-medium text-gray-700">
                    Mother's Phone Number
                  </label>
                  <input
                    type="tel"
                    name="motherPhone"
                    id="motherPhone"
                    required
                    value={formData.motherPhone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="motherAddress" className="block text-sm font-medium text-gray-700">
                    Mother's Address
                  </label>
                  <textarea
                    name="motherAddress"
                    id="motherAddress"
                    required
                    value={formData.motherAddress}
                    onChange={handleChange}
                    rows={2}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Guardian's Information */}
            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-900">Guardian's Information</h4>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="guardianName" className="block text-sm font-medium text-gray-700">
                    Guardian's Name
                  </label>
                  <input
                    type="text"
                    name="guardianName"
                    id="guardianName"
                    required
                    value={formData.guardianName}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>

                <div>
                  <label htmlFor="guardianPhone" className="block text-sm font-medium text-gray-700">
                    Guardian's Phone Number
                  </label>
                  <input
                    type="tel"
                    name="guardianPhone"
                    id="guardianPhone"
                    required
                    value={formData.guardianPhone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="guardianAddress" className="block text-sm font-medium text-gray-700">
                    Guardian's Address
                  </label>
                  <textarea
                    name="guardianAddress"
                    id="guardianAddress"
                    required
                    value={formData.guardianAddress}
                    onChange={handleChange}
                    rows={2}
                    className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 