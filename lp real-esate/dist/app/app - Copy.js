document.addEventListener('alpine:init', () => {
   Alpine.data('projects', () => ({
      items: [
         {
            title: 'HOUSE',
            img: 'projects-1.jpg',
            descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatum aut ipsam tenetur tempore officiis.',
         },
         {
            title: 'RESTAURANT',
            img: 'projects-2.jpg',
            descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatum aut ipsam tenetur tempore officiis.',
         },
         {
            title: 'APARTEMENT',
            img: 'projects-3.jpg',
            descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatum aut ipsam tenetur tempore officiis.',
         },
         {
            title: 'SCHOOL',
            img: 'projects-4.jpg',
            descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatum aut ipsam tenetur tempore officiis.',
         },
         {
            title: 'INTERIOR',
            img: 'projects-5.jpg',
            descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatum aut ipsam tenetur tempore officiis.',
         },
         {
            title: 'VILLA',
            img: 'projects-6.jpg',
            descript: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptatum aut ipsam tenetur tempore officiis.',
         },
      ],
   }));

   Alpine.data('services', () => ({
      items: [
         {
            service: 'Bekerjasama dengan Design Hebat',
         },
         {
            service: 'Alat dan SDM yang Berkualitas serta Berpengalaman',
         },
         {
            service: 'Tersedia Produk - produk Interior',
         },
         {
            service: '90% dapat Mengerjakan Project sesuai Target',
         },
         {
            service: 'Harga yang Terjangkau',
         },
         {
            service: 'Dipercaya lebih dari 250+ Perusahaan',
         },
         {
            service: 'Siap Melayani di Berbagai Daerah',
         },
         {
            service: 'Bernegosiasi dengan Ramah',
         },
      ],
   }));

   Alpine.data('faq', () => ({
      items: [
         {
            collapse: 'collapseOne',
            quest: 'Bagaimana cara saya menghubugi perusahaan?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam tempore recusandae repellendus repudiandae minima odit. Ducimus repellendus dolorum fuga.',
         },
         {
            collapse: 'collapseTwo',
            quest: 'Apakah sudah terverifikasi?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam tempore recusandae repellendus repudiandae minima odit. Ducimus repellendus dolorum fuga.',
         },
         {
            collapse: 'collapseThree',
            quest: 'Bagaimana cara bekerjasama dengan perusahaan?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam tempore recusandae repellendus repudiandae minima odit. Ducimus repellendus dolorum fuga.',
         },
         {
            collapse: 'collapseFour',
            quest: 'Apakah alamat perusahaan sudah sesuai?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam tempore recusandae repellendus repudiandae minima odit. Ducimus repellendus dolorum fuga.',
         },
         {
            collapse: 'collapseFive',
            quest: 'Apakah bisa menawar harga?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam tempore recusandae repellendus repudiandae minima odit. Ducimus repellendus dolorum fuga.',
         },
         {
            collapse: 'collapseSix',
            quest: 'Bagaimana cara perusahaan dan client bekerjasama dengan baik?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam tempore recusandae repellendus repudiandae minima odit. Ducimus repellendus dolorum fuga.',
         },
         {
            collapse: 'collapseSeven',
            quest: 'Dimana Saya bisa menemukan alamat perusahaan ini?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam tempore recusandae repellendus repudiandae minima odit. Ducimus repellendus dolorum fuga.',
         },
         {
            collapse: 'collapseEight',
            quest: 'Apakah ada biaya tambahan setelah selesai pembangunan?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam tempore recusandae repellendus repudiandae minima odit. Ducimus repellendus dolorum fuga.',
         },
      ],
   }));
});
