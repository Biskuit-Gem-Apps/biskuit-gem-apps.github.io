import React from "react";
import ReactDOM from "react-dom";

// Import Loading
import { Preloader } from "./components";

const PortalLoading = () => {
	const loadingDiv = (
		<div className="preloader">
			<Preloader />
		</div>
	);

    return ReactDOM.createPortal(
      	loadingDiv, 
        document.getElementById("portal-loading")
    );
}

export default PortalLoading;
