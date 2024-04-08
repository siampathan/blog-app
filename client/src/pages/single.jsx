import Edit from "../img/edit.png";
import Delete from "../img/delete.png";
import { Link } from "react-router-dom";
import Menu from "../components/menu";

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image"
        />

        <div className="user">
          <img
            src="https://api.unrealperson.com/image?name=image.57343.3654189.jpg&type=tpdne"
            alt=""
          />

          <div className="info">
            <span>Siam</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="edit" />
            </Link>
            <img src={Delete} alt="delete" />
          </div>
        </div>

        <h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia fugiat
          autem aperiam officiis nesciunt quae!{" "}
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere,
          expedita. Qui nam ducimus quisquam inventore alias adipisci pariatur
          sapiente ratione perferendis eveniet, impedit expedita deserunt quos
          similique rem eaque. Magnam quisquam voluptatum dolores architecto
          nulla ad reprehenderit error porro veniam. <br />
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla
          necessitatibus rerum unde. Assumenda odit unde accusamus voluptates
          dignissimos ipsam beatae! Tempore numquam fuga iusto repellendus
          eligendi perferendis vitae aliquid minima nihil autem explicabo quae
          id, hic quia quasi nam dolores facilis nesciunt? Voluptatum sunt
          delectus labore, officia, consequatur natus reprehenderit corrupti
          ipsa quis unde debitis nihil molestiae ipsum dignissimos vel
          necessitatibus inventore veniam qui hic similique laboriosam commodi
          dolore. Quia reiciendis voluptatem soluta ipsam illo nisi dignissimos
          nulla aspernatur molestiae.
        </p>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
          modi nihil quibusdam, nemo nostrum consectetur animi? Quas odio
          voluptatibus dolore nam totam ad nostrum impedit ratione ex, deleniti
          blanditiis modi. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Sit, voluptates repellat? Culpa autem iste dignissimos repellat,
          esse quos ex consequatur eaque ullam cum reiciendis corporis voluptate
          nemo officia adipisci commodi earum ipsa assumenda magnam enim, eum
          labore. Magni, molestiae pariatur velit totam modi sunt mollitia
          inventore, dolor aliquid voluptas cum laudantium culpa distinctio,
          perferendis dignissimos alias dolore ex ipsam est eligendi? Esse
          doloribus quas impedit quasi laudantium blanditiis eius dolorum?
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae,
          rem nihil facilis architecto ipsam sint qui quisquam corporis, iure
          error, earum at assumenda doloremque perferendis aut est maiores
          aliquid voluptatem non dolores soluta reiciendis reprehenderit optio
          placeat. Placeat eveniet laboriosam, tenetur ut praesentium, nulla
          expedita eos tempora rerum officiis vel ducimus itaque ex amet!
          Mollitia quos ad iste quod illum cumque inventore, corrupti qui hic
          deserunt eligendi vel, ipsum quis, molestiae accusantium obcaecati?
          Nam quasi quaerat ab cupiditate adipisci hic atque corporis. Quidem
          provident ipsum, ab sint, eligendi, esse magni maiores voluptates non
          aspernatur iste dignissimos! Nostrum sit corrupti aliquid. <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
          ducimus facilis dicta sit, soluta rerum. Hic maiores voluptatibus
          voluptatem nesciunt amet similique alias vel nostrum distinctio
          aspernatur quo eveniet laborum, totam magnam, quia iste, dolores
          quaerat? Esse officiis laborum, itaque cumque a, vero, numquam ullam
          perspiciatis odio dicta quas perferendis iste adipisci saepe
          distinctio eligendi quam nihil. Architecto, illo dolore repellat sed
          ab quod beatae atque nobis, doloremque culpa praesentium asperiores
          corporis error, dicta facilis eos iure vel nesciunt. Qui officia
          beatae voluptates numquam laudantium. Necessitatibus incidunt
          quibusdam obcaecati. Cupiditate accusantium laboriosam est praesentium
          asperiores? Optio repellat illum velit saepe?
        </p>
      </div>

      <Menu />
    </div>
  );
};

export default Single;
