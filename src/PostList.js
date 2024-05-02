import React from 'react';
import './App.css'; // Import CSS file for post list styles
import post from './post.jpg'; // Import the image file
import post2 from './post2.jpg'; // Import the image file
import post3 from './post3.png'; // Import the image file

function PostList() {
  // Dummy array of posts (you can replace it with actual data)
  const posts = [
    {
      id: 1,
      title: 'World Tour',
      author: 'Aakash Deep',
      publicationDate: 'April 18, 2024',
      imageUrl: post, // Use the imported variable directly
      content: 'Embarking on a world tour is akin to flipping through the pages of a global narrative, each destination a chapter, unveiling diverse cultures, landscapes, and histories. From the bustling streets of Tokyo, where modernity meets tradition in a harmonious dance, to the serene majesty of Machu Picchu, where ancient ruins whisper tales of a bygone era, every stop holds a unique allure. Whether its the rhythmic beats of flamenco in Spain or the aromatic spices of Moroccan souks, the world tour promises an odyssey of sensory delights and profound revelations, weaving a tapestry of experiences that linger long after the journeys end.',
    
    },
    {
      id: 2,
      title: 'Fastest Car',
      author: 'Supra',
      publicationDate: 'April 18, 2024',
      imageUrl: post2, // Use the imported variable directly
      content: 'The title of "fastest car" is often contested, with various contenders vying for the title based on different metrics such as top speed, acceleration, or lap times on specific tracks. As of my last update in January 2022, the Bugatti Chiron Super Sport 300+ held the record for the fastest production car, reaching a top speed of over 300 miles per hour (482 kilometers per hour). However, the landscape of high-performance automobiles is ever-evolving, with manufacturers constantly pushing the boundaries of speed and technology. Its worth checking the latest automotive news to see if any new contenders have claimed the throne since then.',
    },
    {
      id: 3,
      title: 'Milky Way Galaxy',
      author: 'Pawan',
      publicationDate: 'April 18, 2024',
      imageUrl: post3, // Use the imported variable directly
      content: 'The Milky Way galaxy, home to our solar system and billions of stars, spans an immense expanse of space. Shaped like a spiral, it stretches about 100,000 light-years in diameter and contains between 100 to 400 billion stars, along with vast amounts of gas, dust, and dark matter. At the center of the Milky Way lies a supermassive black hole called Sagittarius A*, which has a mass equivalent to millions of suns. Surrounding this black hole is a dense region of stars known as the galactic bulge. The Milky Way is just one of billions of galaxies in the observable universe, each with its own unique characteristics and mysteries.',
    },
  ];

  return (
    <div className="PostList">
      <h2>Latest Posts</h2>
      {posts.map(post => (
        <div className="Post" key={post.id}>
          <img src={post.imageUrl} alt={post.title} className="PostImage" /> {/* Image */}
          <div className="PostContent"> {/* Content */}
            <h3>{post.title}</h3>
            <p>Author: {post.author}</p>
            <p>Publication Date: {post.publicationDate}</p>
            <p>{post.content}</p>
          </div>
          <hr className="PostSeparator" /> {/* Horizontal black line */}
        </div>
      ))}
    </div>
  );
}

export default PostList;
