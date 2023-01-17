import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, count } = req.query
  const data = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${id}&key=${process.env.YOUTUBE_KEY}&maxResults=${count || 5}`)

  const result = await data.json()

  const videos = result.items.map(video => {
    return {
      date: video.snippet.publishedAt,
      title: video.snippet.title,
      description: video.snippet.description,
      image: video.snippet.thumbnails.maxres.url,
      position: video.snippet.position,
      videoId: video.snippet.resourceId.videoId
    }
  })

  videos.sort(function (a, b) {
    const bDate: any = new Date(b.date)
    const aDate: any = new Date(a.date)

    return bDate - aDate;
  });

  res.status(200).json({ videos })
}