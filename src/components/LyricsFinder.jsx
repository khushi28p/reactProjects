import React, {useState} from 'react'
import axios from 'axios'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const LyricsFinder = () => {
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');
    const [loading, setLoading] = useState(false);
    const [lyrics, setLyrics] = useState('');

    const findLyrics = async (e) => {

        e.preventDefault();

        if(artist === '' || song === '') return;

        setLoading(true);
        try{
            const response = await axios.get(`https://api.lyrics.ovh/v1/${artist}/${song}`);
            setLyrics(response.data.lyrics);
        }
        catch(error) {
            setLyrics('Error fetching lyrics. Please try again.');
        }
        setLoading(false);
    }

  return (
    <div className='flex flex-col justify-center items-center w-full min-h-screen py-8 text-white gap-10'>
      <h1 className='text-4xl font-bold'>Lyrics Finder</h1>
      <form onSubmit={(e) => findLyrics(e)} className='flex gap-2 w-3/5'>
        <Input type='text' placeholder='Song Name' value={song} onChange={(e) => setSong(e.target.value)} />
        <Input type='text' placeholder='Artist Name' value={artist} onChange={(e) => setArtist(e.target.value)} />
        <Button className='px-8  bg-blue-500 hover:bg-blue-600'>Search</Button>
      </form>
      {
        loading ? (
            <>Loading...</>
        ) : (
            <pre className='bg-gray-500/10 px-6 py-4 rounded-lg'>{lyrics}</pre>
        )
      }
    </div>
  )
}

export default LyricsFinder
