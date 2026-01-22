
const VideoSection = () => {
  return (
    <section className='w-full min-h-screen bg-gradient-to-b from-gray-900 to-black'>
      <div className='container mx-auto px-4 py-16'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight'>
           How It Works ? 
          </h1>
          <p className='text-xl text-gray-300 max-w-2xl mx-auto'>
           Your intelligent companion for LeetCode problem-solving. Get instant Big O complexity analysis directly on LeetCode platform.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div className="relative aspect-video bg-black">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source
                src="https://res.cloudinary.com/djfixzkqe/video/upload/v1769082411/Purple_canyon_YouTube_intro_-_Made_with_Clipchamp_qww4vh.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
        </div>
        
        
      </div>
    </section>
  )
}

export default VideoSection