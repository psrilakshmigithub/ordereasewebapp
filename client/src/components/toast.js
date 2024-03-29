import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css'

export default function ToastMessage(props) {

    return (
        <>
            <div role="alert" aria-live="assertive" aria-atomic="true" id="toastAlert" class="toast" data-autohide="false">
                <div class="toast-header">

                    
                    <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="toast-body">
                    {props.message}
                </div>
            </div>
        </>)
}