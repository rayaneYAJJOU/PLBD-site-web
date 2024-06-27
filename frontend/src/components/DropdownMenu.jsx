import "../styles/DropdownMenu.css"
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { Dropdown } from 'primereact/dropdown';

const DropdownMenu = ({ option, options, setSelection, checkmark }) => {
    return <div className="dropdown-container">
        <Dropdown
            value={option}
            onChange={(e) => setSelection(e.value)} 
            options={options} 
            optionLabel="name"
            checkmark={checkmark}
            highlightOnSelect={!checkmark}
            placeholder="Sélectionnez un rôle" className="w-full md:w-14rem" 
        />
    </div>
}

export default DropdownMenu