import React from 'react'
import Heading from "./Heading"
import {Link} from "gatsby"

export default function Dualinfoblock({heading}) {
    return (
        <section className="my-4 py-4 bg-theme">
        <div className="container">
            <Heading title={heading}/>
            <div className="row">
                <div className="col-8 mx-auto">
                    <p className="lead text-white mb-5">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis rerum repudiandae, voluptas corrupti suscipit error soluta neque quo dolor omnis ipsa, saepe quis illum non similique? Unde ratione aspernatur dolor
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore ipsa molestias, animi enim excepturi unde vel fugit quod dolor iusto recusandae iste ullam blanditiis voluptate sit temporibus saepe voluptatibus accusamus mollitia ratione. Voluptatem veritatis harum reiciendis dolore neque itaque amet!
                        um aperiam incidunt consequuntur officia aut quam rem, iusto excepturi eius repellat quo amet dolore beatae sint earum molestiae enim odio.
                    </p>
                 </div>
                 <div className="col-4">
                    <div className="card">
                        <img src="https://images.pexels.com/photos/3589903/pexels-photo-3589903.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="image" className="card-img-top"/>
                        <div className="card-body">
                            <h5 className="card-title">Just click photos</h5>
                            <p className="card-text">Lorem ipsum dolor sit amet,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, iure quos inventore corporis vitae libero ad praesentium et totam ratione itaque quia doloremque magni hic tempore commodi dignissimos quo! Nesciunt molestias libero soluta cupiditate ratione culpa itaque officiis odit sapiente.
                             consectetur adipisicing elit. Animi, amet! Ex quibusdam soluta dolores adipisci inventore in qui nesciunt iure.</p>
    <Link to="#" className="btn btn-warning btn-block">{heading}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    )
}
