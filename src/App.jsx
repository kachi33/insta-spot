import React, { useState } from "react";

function App() {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showNewPostModal, setShowNewPostModal] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  return (
    <div className="bg-[#fcf5e5] min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="h-12 py-5 flex justify-center items-center bg-white/80">
        <nav className="navbar">
          <div className="logo">
            <img src="src/assets/Logo.svg" alt="logo" />
          </div>
        </nav>
      </header>

      {/* Main container */}
      <main className="mx-auto px-20">
        {/* Hero Section */}
        <section className="flex justify-between items-end mt-8 mb-5 flex-col md:flex-row text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-5">
            <img
              src="src/assets/Avatar.png"
              alt="avatar"
              className="w-[190px] h-[190px]"
            />
            <div className="flex flex-col justify-between items-start gap-9 ">
              <div>
                <h2 className="text-4xl font-medium mb-2">Bessie Coleman</h2>
                <p className="text-[#212121b3] text-base font-medium sm:text-sm">Civil Aviator</p>
              </div>
              <button
                className="text-slate-600 flex gap-2 font-medium hover:opacity-100 transition-opacity"
                onClick={() => setShowEditModal(true)}
              >
                <img src="src/assets/Icon_edit.svg" />Edit Profile
              </button>
            </div>
          </div>

          <button
            onClick={() => setShowNewPostModal(true)}
            className="mt-6 md:mt-0 flex items-center gap-2 w-[149px] h-[52px] bg-[#212121] text-[#fcf5e5] rounded-lg justify-center font-medium text-base hover:opacity-80 transition"
          >
            <img src="./Icons/Icon_add.svg" alt="add" />
            New Post
          </button>
        </section>

        <hr className="border-[#21212166]" />

        {/* Grid Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-5 mb-10">
          {/* Cards will be inserted here */}
        </section>

        <hr className="border-[#21212166]" />
      </main>

      <footer className="text-center py-6">2023 &copy; Spots</footer>

      {/* Edit Profile Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-xl w-[90%] max-w-md relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Edit Profile</h2>
              <button
                onClick={() => setShowEditModal(false)}
                className="text-2xl font-bold text-gray-600 hover:text-black"
              >
                &times;
              </button>
            </div>
            <form className="flex flex-col gap-4">
              <label className="text-sm font-medium">Name:</label>
              <input
                type="text"
                className="border-2 border-[#dcc48f] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#dcc48f]"
                minLength={8}
                maxLength={20}
              />

              <label className="text-sm font-medium">Profession:</label>
              <input
                type="text"
                className="border-2 border-[#dcc48f] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#dcc48f]"
                minLength={8}
                maxLength={120}
                required
              />

              <label className="text-sm font-medium">Profile Image:</label>
              <input
                type="file"
                accept="image/jpeg, image/png, image/jpg"
                className="file:border file:border-gray-300 file:rounded file:px-3 file:py-1"
                onChange={(e) =>
                  setImagePreview(
                    e.target.files?.[0]
                      ? URL.createObjectURL(e.target.files[0])
                      : null
                  )
                }
              />
              {imagePreview && (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-24 mt-2 rounded"
                />
              )}

              <button
                type="submit"
                className="w-[149px] h-[52px] mx-auto bg-[#212121] text-[#fcf5e5] rounded-lg hover:opacity-80 transition"
              >
                Save Changes
              </button>
            </form>
          </div>
        </div>
      )}

      {/* New Post Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold">New Post</h3>
              <button
                onClick={() => setShowNewPostModal(false)}
                className="text-lg hover:text-red-500"
              >
                <img src="./Icons/Icon_close.svg" alt="close" />
              </button>
            </div>

            <div className="flex flex-col gap-4">
              <div>
                <label className="text-sm font-medium">Post title</label>
                <input
                  type="text"
                  minLength={8}
                  maxLength={20}
                  placeholder="Input title"
                  className="w-full border-2 border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#dcc48f]"
                />
                <small className="text-red-500"></small>
              </div>

              <div>
                <label className="text-sm font-medium">Upload Image</label>
                <input
                  type="file"
                  accept="image/jpeg, image/png, image/jpg"
                  className="file:border file:border-gray-300 file:rounded file:px-3 file:py-1"
                />
              </div>
            </div>

            <div className="mt-6 text-center">
              <button className="bg-[#212121] text-[#fcf5e5] px-6 py-3 rounded-lg hover:opacity-80">
                Upload Post
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
