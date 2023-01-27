import type { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, count } = req.query
  const data = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${id}&key=${process.env.YOUTUBE_KEY}&eventType=upcoming&type=video&maxResults=${count || 5}`)
  const result = await data.json()

  let response;
  if (result.error) {
    response = result.error
  }
  else {
    const videos = result.items.map(video => {
      return {
        date: video.snippet.publishedAt,
        title: video.snippet.title,
        description: video.snippet.description,
        image: video.snippet.thumbnails.high.url.replace("hqdefault", "maxresdefault"),
        videoId: video.id
      }
    })

    videos.sort(function (a, b) {
      const bDate: any = new Date(b.date)
      const aDate: any = new Date(a.date)

      return bDate - aDate;
    });

    response = { meta: { amount: videos.length }, result: videos }
  }

  res.status(response.code || 200).json(response)
}