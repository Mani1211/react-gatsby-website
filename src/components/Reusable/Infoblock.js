import React from 'react'
import Heading from "./Heading"
import {Link} from "gatsby";

export default function Infoblock({heading}) {
    return (
        <section className="bg-theme my-5 py-4">
            <div className="container">
                <Heading title={heading}/>
                <div className="row">
                    <div className="col-10 col-8 mx-auto text-center">
                     <p className="lead text-white mb-4">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maxime l
                         aborum quia dolor repellendus quae neque provident hic tempora in offic
                         ia, adipisci non consectetur natus facilis eligendi ab corrupti inve
                         ntore delectus labore voluptatum assumenda unde dignissimos dol
                         oremque? Consectetur vero nihil adipisci animi repellat libero minima. Ve
                         niam ut, nostrum eligendi velit autem ab saepe! Amet quidem
                          eius nisi deserunt. Aperiam, nisi?
                     </p>
                    <Link to="/about/">
                        <button className="btn btn-warning btn-lg">
                            {heading}
                        </button>
                    </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
