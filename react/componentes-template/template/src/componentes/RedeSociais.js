import React from "react";
import Face from "../img/Face.png"
import Insta from "../img/Insta.png"
import Link from "../img/Linkdin.png"
import Twitter from "../img/Twitter.png"

export default function RedeSociais (){
    return(
        <div>
            <ul className="RedeSociais">
                <li>
                <a href="https://pt-br.facebook.com/"><img src={Face}></img></a>
                </li>
                <li>
                <a href="https://www.instagram.com/"><img src={Insta}></img></a>
                </li>
                <li>
                <a href="https://br.linkedin.com/"><img src={Link}></img></a>
                </li>
                <li>
                <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D"> <img src={Twitter}></img></a>
                </li>
            </ul>
        </div>
    )
}