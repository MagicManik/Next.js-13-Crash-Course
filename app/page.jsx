import React from 'react';

const HomePage = () => {
  return (
    <main className='py-8 text-white devconf-bg'>
      <h1 className='text-8xl py-6'>Pioneer Programmers</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores voluptates, voluptatum consequuntur recusandae fugit debitis quisquam quia dicta eligendi suscipit magnam velit non ducimus harum aut. Maxime animi pariatur sunt ab. Repudiandae dignissimos atque sed repellendus cum perspiciatis assumenda praesentium recusandae dolore. Doloremque magnam odio quidem obcaecati eveniet eligendi rem ducimus veritatis repudiandae quae esse et molestiae quaerat aspernatur suscipit corrupti, nobis expedita placeat. Magnam, blanditiis? Ut aliquam eligendi voluptas, rerum voluptates error alias, praesentium molestias nesciunt modi impedit quasi. Libero accusantium consequuntur nihil, soluta nam placeat vel cumque quasi ab voluptatum alias praesentium dolorem nulla accusamus saepe repudiandae earum inventore vitae. Inventore quas consequuntur recusandae optio laudantium, doloremque eos tempora, magnam architecto nesciunt vero pariatur impedit illum eum reprehenderit sequi at ad numquam minima! Eum, debitis cumque aspernatur est enim rem, omnis hic eveniet nisi inventore repudiandae. Cumque quo, et vitae tempore expedita velit odit? Reiciendis perspiciatis laboriosam quia porro nam officia magnam quasi nemo, dicta, expedita, ipsam natus at pariatur minus consequatur! Non perferendis aperiam quisquam facilis obcaecati. Accusamus ratione cupiditate vitae ducimus culpa, id dolore. Dolore est, fuga aliquam quaerat sint, error modi, sapiente consequuntur veritatis dicta ex? Odio nam doloremque labore illum, voluptatibus deleniti obcaecati necessitatibus?</p>
      <div className='flex justify-center gap-6 py-10'>
        <video
          width="400"
          controls
          controlsList="nodownload"
          poster='https://static-cse.canva.com/blob/1041210/1600w-wK95f3XNRaM.jpg'
          className='rounded-2xl'>
          {/* <source src="./videos/my-tutorial.mp4" type="video/mp4" />
          <source src="./videos/my-tutorial.ogg" type="video/ogg" /> */}
          Your browser does not support HTML video.
        </video>
        <video
          width="400"
          controls
          controlsList="nodownload"
          poster='https://static-cse.canva.com/blob/1041210/1600w-wK95f3XNRaM.jpg'
          className='rounded-2xl'>
          {/* <source src="./videos/my-tutorial.mp4" type="video/mp4" />
          <source src="./videos/my-tutorial.ogg" type="video/ogg" /> */}
          Your browser does not support HTML video.
        </video>
      </div>
    </main >
  );
}

export default HomePage;