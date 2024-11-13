import { init } from "../../app";

export {getActions} from '../actions/getActions'
export {searchActions} from '../actions/searchActions'
export {createActions} from '../actions/createActions'
export {updateActions} from '../actions/updateActions'
export {connectionActions} from '../actions/connectionActions'
export {deleteActions} from '../actions/deleteActions'
export {syncActions} from '../actions/syncActions'

// Define the type of syncActions object
export interface Actions {
  [key: string]: (payload: any) => Promise<{ success: boolean; data?: any }>;
}