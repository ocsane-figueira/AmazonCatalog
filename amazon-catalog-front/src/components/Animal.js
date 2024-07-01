import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal);

const DEFAULT_URI = "https://wallpapers.com/images/hd/leopard-in-forest-of-amazonas-i16dgixbsu77unap.jpg";

const Image = ({ animal }) => {
  return (
    <div className="col-md-5 animated-image">
      <div className="hoverzoomAzul">
        <img
          src={animal?.uriImage || DEFAULT_URI}
          style={{ width: '100%', height: 300, objectFit: 'cover' }}
          className="rounded"
          alt={animal.name}
          loading="lazy"
        />
      </div>
    </div>
  )
}

const deleteAnimal = async (navigate, id) => {
  MySwal.fire({
    title: "Tem certeza?",
    text: "Excluir um registro não permitirá recuperá-lo",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    cancelButtonText: "Cancelar",
    confirmButtonText: "Sim, deletar!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      await axios.delete(`http://localhost:8080/api/animal/${id}`);
      navigate(0);
    }
  });
}

const Animal = ({ animal, actions, reverse }) => {
  const navigate = useNavigate();

  if (!animal?.id)
    return null;

  return (
    <div className={`card featurette p-4 gap-2 flex-row${reverse ? '-reverse' : ''}`}>
      <div className="col-md-7 d-flex flex-column justify-content-between">
        <div>
          {!!animal?.name && 
          <h2 className="featurette-heading animated-text">
            {animal.name}
          </h2>}

          {!!animal.title &&
          <h4 className=" text-muted">
            {animal.title}
          </h4>}

          {!!animal.description &&
          <p className="lead animated-text">
            {animal.description}
          </p>}
        </div>
        {actions &&
        <div className={`d-flex gap-2 flex-row justify-content-${reverse ? 'end' : 'start'}`}>
          <Link to={`/info/${animal.id}`}><button type="button" className="btn btn-info">Visualizar</button></Link>
          <Link to={`/edit/${animal.id}`}><button type="button" className="btn btn-warning">Editar</button></Link>
          <button type="button" className="btn btn-danger" onClick={() => deleteAnimal(navigate, animal.id)}>Deletar</button>
        </div>}
      </div>
      <Image animal={animal} />
    </div>
  );
};

export default Animal;