import { EmptyState, Pagination, SharedHeader, VideoCard } from "@/components";
import { getAllVideos } from "@/lib/action/video";

const Page = async ({ searchParams }: SearchParams) => {
  const { query, filter, page } = await searchParams;

  const { videos, pagination } = await getAllVideos(
    query,
    filter,
    Number(page) || 1
  );
  console.log(videos.length)

  return (
    <main className="wrapper page">
      <SharedHeader subHeader="Public Library" title="All Videos" />

      {1 ? (
        <section className="video-grid">
          {videos.map(({ video, user }) => (
            <VideoCard
              key={video.id}
              id={video.videoId}
              title={video.title}
              thumbnail={video.thumbnailUrl}
              createdAt={video.createdAt}
              userImg={user?.image ?? ""}
              username={user?.name ?? "Guest"}
              views={video.views}
              visibility={video.visibility}
              duration={video.duration}
            />
          ))}
        </section>
      ) : (
        <EmptyState
          icon="/assets/icons/video.svg"
          title="Video Bulunamadı"
          description="Tekrar arama yapınız"
        />
      )}

      {pagination?.totalPages > 1 && (
        <Pagination
          currentPage={pagination.currentPage}
          totalPages={pagination.totalPages}
          queryString={query}
          filterString={filter}
        />
      )}
    </main>
  );
};

export default Page;
