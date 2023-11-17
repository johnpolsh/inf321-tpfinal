import { Link } from "react-router-dom";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// function SearchBar() {
//     return (
//       <div className="input-group">
//         <div className="form-outline">
//           <input type="search" id="form1" className="form-control" />
//           <label className="form-label" htmlFor="form1">
//             Search
//           </label>
//         </div>
//         <button type="button" className="btn btn-primary">
//           <i className="fas fa-search"></i>
//         </button>
//       </div>
//     );
//   }

  function SearchBar() {
    return (
      <div className="d-flex justify-content-end align-items-center" style={{ marginRight: '55px' }}>
        <div className="input-group" style={{ maxWidth: "300px", position: 'relative' }}>
          <input
            type="text"
            className="form-control"
            placeholder="Pesquisar"
            aria-label="Pesquisar"
            aria-describedby="basic-addon2"
            style={{ borderColor: '#9e642e' }}
          />
          <div className="input-group-append fas fa-search" style={{ backgroundColor: '#9e642e' }}>
            <Link to="#" className="btn btn-outline-secondary border-0 rounded-0" type="button">
              <FontAwesomeIcon style={{ color: 'black' }} icon={faSearch} />
            </Link>
          </div>
        </div>
      </div>
    );
  }
export default SearchBar;

