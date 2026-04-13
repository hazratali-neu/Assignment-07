import React, { useEffect, useState } from 'react';
import Friend from '../../ui/Friend';

const Friends = () => {

    const [friends,setFriends]=useState([]);
    // const [loading, setLoading] = useState(true);
    useEffect(()=>{
        fetch('/friends.json')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    },[])

    return (
        <div className='max-w-[1110px] mx-auto mt-8'>
            <h2 className='text-[#1F2937] mb-4 font-semibold text-2xl'>Your Friends</h2>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
                 {
                    friends.map((friend,idx)=> <Friend key={idx} friend={friend}></Friend>)
                 }
            </section>
        </div>
    );
};

export default Friends;

