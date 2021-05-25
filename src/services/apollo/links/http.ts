import { createUploadLink } from "apollo-upload-client";
const isDev = !!__DEV__;
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const createLink = () =>
  createUploadLink({
    uri: "",
  });

export default createLink;
