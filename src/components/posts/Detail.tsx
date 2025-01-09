"use client"
import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import { ThumbsUp, ThumbsDown } from 'lucide-react'
import ugocukwo from "@/assets/images/ugochukwu.jpg"
import solana from '@/assets/images/solana-img.jpg'
import { postTags } from "@/constants"

const Detail = () => {
     const params = useParams();

     console.log(params)

  return (
    <div>
        {/* top info */}
        <aside className="flex w-full h-[70px] items-center bg-line gap-[10px] p-[15px]">
           <h4 className="text-[14px] w-[90%] mx-auto md:text-[16px] lg:text-[18px] text-secondary"> Home <strong className="font-bold text-main"> {">"} </strong> Post <strong className="font-bold text-main"> {">"} </strong>  Defi </h4>
        </aside>
        {/* post banner */}
        <Image src={ugocukwo} alt="post-banner" className="w-full h-[450px] object-cover" />

        {/* post details and related post */}
        <article className="w-[90%] mx-auto flex gap-[45px] mt-[30px]">
            {/* left side */}
            <aside className="w-[60%]">
                <div className="w-full flex flex-col gap-[20px]">
                    <h2 className="font-bold text-[22px] md:text-[35px] lg:text-[45px]"> What is Defi </h2>
                    <p className="flex items-center gap-[10px] mt-[10px] text-[16px] text-textMain"> By <strong> Michael Jackson </strong>  <div className="h-[10px] w-[2px] bg-textMain" /> 09 Jan 2025 </p>
                    <Image src={solana} alt="post-image" className="rounded-[10px] w-full h-[350px] object-cover" />
                </div>
                {/* post content */}
                <div className="mt-[30px] ">
                   <p className="indent-4 w-full whitespace-pre-wrap "> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem obcaecati accusantium voluptatum quo vitae fuga inventore possimus cumque expedita ducimus. Tempora molestiae consequatur excepturi quidem et reprehenderit nostrum illum illo corrupti soluta, sit accusantium, at ex quos voluptatem id quibusdam eveniet aut dolorum. Perspiciatis quas similique aliquam debitis earum, enim ea quae amet, architecto dicta eaque optio, illum molestiae! Minima laudantium recusandae perspiciatis consequuntur molestiae quo ducimus necessitatibus tenetur impedit voluptatum. Necessitatibus voluptas ut, aperiam vitae quaerat incidunt ipsa in, possimus sit reiciendis tenetur consequuntur cum, harum placeat quasi dolores eligendi? Error tempora quod asperiores, minima reprehenderit dolorem voluptatem cum illo voluptate praesentium delectus, vero totam harum quam eius odio architecto vitae pariatur quo consequatur. Doloremque quas necessitatibus corporis animi atque accusamus beatae voluptatibus, libero amet possimus quia repellendus quo exercitationem soluta doloribus quae totam cumque cupiditate rerum magni odit, aliquid hic ut! Quod minus quae dicta officiis nostrum? Error, hic reiciendis, delectus corporis aperiam ipsam dolore at architecto praesentium ducimus vero odio harum optio eaque? Pariatur sed ipsa ipsum voluptatibus molestias animi cumque inventore fugit ad amet soluta dolores laudantium veritatis vero laboriosam, earum hic nostrum omnis beatae delectus obcaecati laborum! Laudantium nam voluptates nemo odio quidem. Maxime id, et quidem similique ab dicta quisquam? Eaque, doloribus dolorum. Deserunt, harum. Similique ratione iste pariatur recusandae quas quisquam eligendi? Aspernatur, tempore, beatae expedita eum voluptatum dolorum ipsa repellat facilis magnam reiciendis, cupiditate est nam aut exercitationem sint! Nesciunt, quae distinctio soluta eligendi modi minus! Dolores architecto illum dolore iste nisi veritatis ullam inventore maiores soluta eligendi minus aut in rem consequuntur reprehenderit voluptate vitae, asperiores ex facilis? Quia voluptas esse tempore placeat incidunt, animi deleniti doloribus inventore quaerat atque, ut facere, excepturi maxime eaque! Id vero eum quidem nisi, libero dolorum nulla cum ipsum recusandae atque alias! Ut dignissimos dolores, hic cum itaque ea aut asperiores esse sint excepturi animi eum consequuntur neque totam sit est nisi explicabo natus nemo, autem molestiae fuga alias laudantium incidunt. Aliquid, asperiores adipisci alias, saepe natus minus, hic magni commodi ab voluptatum repudiandae! Eveniet, blanditiis. Dignissimos beatae recusandae nesciunt velit ut, tenetur laudantium doloribus consectetur placeat aspernatur at suscipit fugit excepturi culpa aliquam harum numquam et maiores. Aliquam placeat, saepe dolorem minima veritatis reiciendis ullam quibusdam deleniti eos amet, iure eaque eveniet soluta dolorum quas porro laudantium eum error. Tempore ex corporis, animi itaque maxime expedita modi quod ea natus architecto dolor ullam mollitia laboriosam nihil cum adipisci nulla enim? Exercitationem eveniet cum dignissimos veniam quia ipsa a consequatur earum corrupti, illum tempore deserunt maxime facere! Quam nisi maiores libero asperiores aspernatur unde velit quas, odit laborum laudantium quae? Vitae, rerum! Temporibus perferendis similique earum quidem, excepturi harum nemo eos, enim quos porro commodi aspernatur. Quaerat ullam voluptate voluptas nulla ab ratione placeat dignissimos perspiciatis, iure facere sed quam quidem possimus nobis quis unde aut delectus! Voluptate, facere quidem nesciunt vero exercitationem cum animi! Cum molestias repellat illum laborum debitis laboriosam? Commodi ad voluptas quibusdam corrupti nemo iusto iste ipsa earum eos quas voluptatum, asperiores rem mollitia sint similique sunt, praesentium quam, repudiandae magni ullam necessitatibus sed id quasi incidunt! Deserunt fuga necessitatibus obcaecati inventore voluptate minima officiis alias repudiandae quos, eum distinctio praesentium dolor explicabo, perspiciatis porro saepe tenetur repellat? Quas fugiat deleniti asperiores exercitationem ea quaerat deserunt amet autem iusto, reprehenderit consectetur, veritatis eaque culpa nemo non. Non, quam reprehenderit minima blanditiis suscipit quia corporis, perferendis praesentium aspernatur iure voluptatum labore? Vel ipsa voluptatum hic, quisquam totam odio accusantium beatae impedit quae adipisci nobis inventore. Recusandae explicabo libero animi repellat sit facere, asperiores eligendi. Perspiciatis expedita amet laborum. Voluptate soluta cumque impedit quo rem delectus, ex quae amet officiis rerum veritatis commodi tenetur ea, quibusdam expedita nemo harum? Voluptas, amet ipsum temporibus pariatur alias dolorem corrupti cupiditate vero accusantium repellat, hic ducimus quas. Laudantium veritatis nulla blanditiis architecto voluptates beatae repellat sed illo reprehenderit placeat iste hic nostrum tempore, incidunt, doloribus vero enim sequi ad! Tenetur impedit pariatur sapiente architecto nihil qui omnis fuga cumque molestias ut voluptatum beatae consectetur quos ex illum earum asperiores non, eum a assumenda aperiam? Nam omnis perferendis saepe maxime voluptatem facere minima repellendus, minus corrupti accusamus nihil tempore libero quos eligendi fugiat rem aperiam? Minus repellendus tempora maxime dolorum. Similique aliquam officiis qui blanditiis consequuntur corporis nostrum maxime, tempore architecto, voluptatum, doloribus adipisci quam facilis distinctio placeat. Est, iusto ducimus culpa minima consequatur repudiandae dicta, quam, sit itaque tempora quaerat aspernatur veritatis facilis. Libero dolorem reprehenderit, iste eaque excepturi nam veniam accusamus ducimus officia itaque! Sit alias voluptatum corporis voluptatibus vitae vero, pariatur sunt perspiciatis eaque nemo molestiae, quaerat rerum repudiandae tenetur. Delectus ipsam necessitatibus veritatis impedit rerum sequi recusandae nihil porro blanditiis, nisi, adipisci totam quibusdam numquam nesciunt ad maxime esse animi quod sapiente hic laborum culpa, molestias perferendis nam. Laudantium ad veritatis, iusto debitis temporibus quae magnam quibusdam reiciendis suscipit vel voluptas asperiores accusamus, a deleniti aspernatur. Et beatae quas, reprehenderit porro dolorum iusto nesciunt debitis architecto tempore amet quaerat pariatur est nobis deserunt, fugit sint? Ipsum corporis illo unde rerum illum facilis, aliquid voluptatum voluptatem porro sapiente nam? Optio aperiam pariatur soluta nostrum obcaecati officia cupiditate? Sint totam, magni architecto ipsam, amet similique dicta tempore porro aperiam delectus quidem eveniet nulla mollitia eaque fuga. Quasi totam deserunt perspiciatis, deleniti voluptates laborum necessitatibus, nam tenetur modi illo voluptatibus alias dolorem quae harum ab ipsa, repellendus debitis veritatis doloribus dolorum ea placeat ipsum! Sint possimus porro deserunt doloribus doloremque saepe iste, dolore dolor libero, debitis, quas tenetur beatae suscipit? Magni officiis velit ratione quibusdam voluptate quos assumenda natus. Sapiente accusamus delectus voluptatibus, magni blanditiis suscipit doloribus fugit architecto aliquid neque quam dolorem molestiae repudiandae odit beatae eius nihil voluptatum sequi dolorum illum modi facere doloremque vel ut! Saepe sequi, ipsa animi laborum magnam tenetur itaque officia debitis repellendus quidem odio perspiciatis eligendi necessitatibus obcaecati architecto excepturi, dolorem pariatur illo impedit quasi. Mollitia ut accusantium odit fuga facilis voluptatem et, optio quia repellendus quam neque consectetur omnis dolorem debitis tempore cumque nobis fugiat culpa architecto hic. </p>
                </div>

            </aside>
            {/* right side */}
            <aside className="w-[30%]">
                {/* other categories */}
                <aside className="flex flex-col gap-[8px] min-h-[100px] w-[80%] mx-auto bg-textMain rounded-[8px]">
                    { postTags.map(tag => (
                        <h3 key={tag.id} className="cursor-pointer"> {tag.tag} </h3>
                    )) }
                </aside>
                {/* related post */}
                <aside></aside>
            </aside>
        </article>

        {/* comment section */}
        <div>

        </div>
    </div>
  )
}

export default Detail