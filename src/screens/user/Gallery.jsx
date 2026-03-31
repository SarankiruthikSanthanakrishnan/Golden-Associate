import React from 'react';
import { Camera, Film, Images, LayoutGrid } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { galleryVideoData, workData } from '../../data/data';

const getEmbedUrl = (url) => {
  if (url.includes('youtu.be/')) {
    const id = url.split('youtu.be/')[1]?.split('?')[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  if (url.includes('watch?v=')) {
    const id = url.split('watch?v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${id}`;
  }

  return url;
};

const Gallery = () => {
  const collections = [
    { label: 'Kitchen Installations', count: 36 },
    { label: 'Customer Showcases', count: 24 },
    { label: 'Service Highlights', count: 18 },
  ];

  return (
    <div className="ga-container pb-12 pt-10">
      <section className="ga-panel relative ga-fade-up p-7 md:p-10 overflow-hidden">
        <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-600/20 blur-3xl z-0" />
        <div className="relative z-10">
          <span className="ga-chip inline-flex px-3 py-1 text-xs font-bold uppercase tracking-wide">
            Visual Portfolio
          </span>
          <h1 className="mt-4 text-3xl font-extrabold text-slate-900 md:text-4xl ga-text-gradient">
            Real projects, installations, and customer spaces.
          </h1>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-600 md:text-base">
            A quick look at our completed appliance setups and service moments
            from across different locations.
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-4 hover:border-blue-200 transition duration-300">
              <LayoutGrid className="text-blue-600" size={18} />
              <p className="mt-2 text-xs text-slate-500">Total Albums</p>
              <p className="text-lg font-extrabold text-slate-900">12</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-4 hover:border-cyan-200 transition duration-300">
              <Images className="text-cyan-600" size={18} />
              <p className="mt-2 text-xs text-slate-500">Uploaded Photos</p>
              <p className="text-lg font-extrabold text-slate-900">240+</p>
            </article>
            <article className="rounded-xl border border-slate-200 bg-slate-50 backdrop-blur-sm p-4 hover:border-sky-200 transition duration-300">
              <Camera className="text-sky-600" size={18} />
              <p className="mt-2 text-xs text-slate-500">New This Month</p>
              <p className="text-lg font-extrabold text-slate-900">27</p>
            </article>
          </div>
        </div>
      </section>

      <section className="mt-10 ga-panel ga-fade-up p-6 md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold text-blue-600">Video Gallery</p>
            <h2 className="text-2xl font-extrabold text-slate-900">
              Embedded Video Slider
            </h2>
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
            <Film size={14} />
            {galleryVideoData.length} videos
          </span>
        </div>

        <Swiper
          className="rounded-xl"
          modules={[Navigation, Autoplay]}
          spaceBetween={16}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: { slidesPerView: 3 },
          }}
        >
          {galleryVideoData.map((video) => (
            <SwiperSlide key={video.id}>
              <article className="overflow-hidden rounded-xl border border-slate-200 bg-slate-50 shadow-sm group">
                <div className="aspect-video w-full bg-slate-50/50 relative">
                  <div className="absolute inset-0 bg-blue-50 pointer-events-none group-hover:opacity-0 transition z-10" />
                  <iframe
                    className="h-full w-full relative z-20"
                    src={getEmbedUrl(video.videoUrl)}
                    title={video.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm font-bold text-slate-900">{video.title}</p>
                  <p className="mt-1 text-xs text-slate-500">
                    {video.description}
                  </p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section className="mt-10 ga-fade-up">
        <div className="mb-5 flex flex-wrap gap-2">
          {collections.map((collection) => (
            <span
              key={collection.label}
              className="ga-chip inline-flex items-center gap-2 px-3 py-1.5 text-xs font-semibold"
            >
              {collection.label}
              <strong className="text-slate-900 bg-slate-200 rounded-full px-2 py-0.5 ml-1">
                {collection.count}
              </strong>
            </span>
          ))}
        </div>

        <div className="columns-1 gap-4 space-y-4 sm:columns-2 lg:columns-3">
          {workData.map((item) => (
            <article
              key={item.id}
              className="ga-panel break-inside-avoid overflow-hidden border-0 p-1 group cursor-pointer"
            >
              <div className="absolute inset-0 bg-linear-to-r from-blue-600/30 to-cyan-600/30 opacity-0 group-hover:opacity-100 transition duration-300 z-10 rounded-xl" />
              <img
                src={item.image}
                alt={`Gallery work ${item.id}`}
                className="w-full object-cover rounded-xl relative z-0 group-hover:scale-105 transition-transform duration-500"
              />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
