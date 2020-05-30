import { LOAD_WEBSITE, LOAD_WEBSITE_SUCCESS } from "../action-type";

export const loadWebsite = () => ({
	type: LOAD_WEBSITE,
});

export const loadWebsiteComplete = () => ({
	type: LOAD_WEBSITE_SUCCESS,
});
