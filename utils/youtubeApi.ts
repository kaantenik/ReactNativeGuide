// YouTube API utility functions

// Define the video type
export interface Video {
  id: string;
  title: string;
  videoId: string;
}

// Function to extract video ID from YouTube URL
export const extractVideoId = (url: string): string => {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return (match && match[2].length === 11) ? match[2] : '';
};

// Function to extract playlist ID from YouTube URL
export const extractPlaylistId = (url: string): string => {
  const regExp = /[?&]list=([^#&?]*).*/;
  const match = url.match(regExp);
  return match ? match[1] : '';
};

// Function to fetch videos from a playlist
export const fetchPlaylistVideos = async (playlistUrl: string): Promise<Video[]> => {
  try {
    // Extract the playlist ID from the URL
    const playlistId = extractPlaylistId(playlistUrl);
    
    if (!playlistId) {
      throw new Error('Invalid playlist URL');
    }
    
    // For a real implementation, you would use the YouTube Data API
    // Here's how you would do it with an API key:
    
    // const API_KEY = 'YOUR_YOUTUBE_API_KEY';
    // const response = await fetch(
    //   `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${playlistId}&key=${API_KEY}`
    // );
    // const data = await response.json();
    
    // return data.items.map((item: any, index: number) => ({
    //   id: item.id,
    //   title: `Ders ${index + 1}`,
    //   videoId: item.snippet.resourceId.videoId,
    // }));
    
    // For now, we'll return a mock implementation with the actual playlist ID
    console.log(`Fetching videos for playlist: ${playlistId}`);
    
    // Mock data - in a real app, this would come from the YouTube API
    return [
      {
        id: '1',
        title: 'Ders 1',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: '2',
        title: 'Ders 2',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: '3',
        title: 'Ders 3',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: '4',
        title: 'Ders 4',
        videoId: 'dQw4w9WgXcQ',
      },
      {
        id: '5',
        title: 'Ders 5',
        videoId: 'dQw4w9WgXcQ',
      },
    ];
  } catch (error) {
    console.error('Error fetching playlist videos:', error);
    throw error;
  }
}; 