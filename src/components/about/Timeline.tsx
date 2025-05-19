import React from 'react';

const schoolHistory = {
  founder: {
    name: 'Rev. Dr. John Mensah Oduro',
    title: 'Founder & Visionary',
    image: '../../assets/founder.jpg',
    bio: 'A visionary leader who established Faith Community Baptist Complex of Schools with a mission to provide quality education grounded in Christian values.'
  }
};

export default function History() {
  return (
    <div className="py-16 sm:py-24 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our History
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            A legacy of excellence in education since 1989
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Founder's Profile */}
          <div className="flex flex-col items-center">
            <div className="relative w-64 h-64 rounded-full overflow-hidden mb-4">
              <img
                src={schoolHistory.founder.image}
                alt={schoolHistory.founder.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">{schoolHistory.founder.name}</h3>
            <p className="text-lg text-red-600 mb-4">{schoolHistory.founder.title}</p>
            <p className="text-gray-600 text-center max-w-md">{schoolHistory.founder.bio}</p>
          </div>

          {/* School History */}
          <div className="lg:pl-8">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 whitespace-pre-line">
                Faith Community Baptist Complex of Schools was established by Rev. Dr. John Mensah Oduro on the 26th of September, 1989 in West Madina at a location popularly known as Madina Zongo Junction. With the support from his late wife, Mrs. Gwendolyn Mensah Oduro and an amount of GHC 150,000(old cedis) the school started with two children namely, Mensah Nii Bortey and Sweetan Kofi Dobatse as well as two teachers- Mrs. Deborah Adu, who is still at post and Mr. Kweku Appiah who served as an
                administrator and bursar. Initially the school was temporarily housed in the Faith Community Baptist Chapel which was then roofed with a tent. Anytime it rained lessons were disrupted but despite this and other handicaps, school activities continued smoothly due to the perseverance and dedication of the teachers.
              </p>
              <p className="text-gray-600 whitespace-pre-line">
                In 1990 the school was moved from the chapel building to a wooden sturcture which served as classrooms and administration. This wooden structure is currently being used as a bookshop and a Health Post for the Madina Community. The Nursery department operated under a shed which is now the school canteen. The Senior High School was later established in January 1996 and has produced many outstanding citizens some of which are teachers currently employed by the school. 
                The school's formidable foundation was laid by a core group of experienced teachers drawn from PRESEC-Legon to set a solid take off for the institution. Thirty-six years on, the school continues to produce excellent WASSCE results which has culminated into the production of many outstanding citizens who are contributing their quotas towards nation building.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}