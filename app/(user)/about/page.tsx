import React from 'react';
export default async() => {
  return (
    <>
    <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Discover the best hotel booking experience with us. Our platform makes finding the perfect stay easier than ever.
          </p>
        </div>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2023, our hotel booking website was created with the simple goal of providing a seamless and hassle-free experience for travelers across the world. We partner with top hotels to bring you the best accommodations at unbeatable prices.
              </p>
              <p className="text-gray-600">
                Whether you’re looking for luxury suites, budget-friendly rooms, or boutique stays, we’ve got you covered. Our dedicated team is passionate about making your travel experiences unforgettable.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80"
                alt="Our Story"
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Customer-Centric</h3>
              <p className="text-gray-600">
                We put our customers first by ensuring their satisfaction and comfort in every booking they make with us.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Transparency</h3>
              <p className="text-gray-600">
                We provide honest pricing, real reviews, and detailed hotel information to make your decisions easier.
              </p>
            </div>
            <div className="bg-white p-6 shadow-lg rounded-lg">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Innovation</h3>
              <p className="text-gray-600">
                We continually improve our platform to bring the latest technology to your hotel booking experience.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Meet Our Team</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <img
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg"
                src="https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1636100249202-5NY98C6ASRIFFPO9GZTU/Tom+Professional+Business+Headshot.jpg"
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold text-gray-700">John Doe</h3>
              <p className="text-gray-500">CEO & Founder</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <img
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg"
                src="https://images.squarespace-cdn.com/content/v1/5cf0d08d5fc69d000172462a/1602248693535-KTGCFTA50807510I5LVN/image-asset.octet-stream?format=500w"
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold text-gray-700">Jane Smith</h3>
              <p className="text-gray-500">Chief Technology Officer</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <img
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg"
                src="https://www.dell.org/wp-content/uploads/2022/01/KatieW.png"
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold text-gray-700">Sarah Brown</h3>
              <p className="text-gray-500">Head of Customer Relations</p>
            </div>
            {/* Team Member 4 */}
            <div className="text-center">
              <img
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-lg"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR48jCnMf6rVtx0mIIr4j8pLnFZT1KPmG3ijkBBBzPbwDfGKxxcxwvAcxurm3RvI6b46-s&usqp=CAU"
                alt="Team Member"
              />
              <h3 className="text-lg font-semibold text-gray-700">Michael Johnson</h3>
              <p className="text-gray-500">Lead Designer</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Ready to Book Your Stay?</h2>
          <p className="text-gray-600 mb-8">
            Find the perfect hotel for your next vacation, business trip, or weekend getaway.
          </p>
          <a
            href="/hotels"
            className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition"
          >
            Book Now
          </a>
        </section>
      </div>
    </div>
    </>
  );
};

