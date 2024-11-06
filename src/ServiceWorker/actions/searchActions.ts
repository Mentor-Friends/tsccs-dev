import { Actions } from ".";
import { SearchLinkMultipleAllData } from "../../Services/Search/SearchLinkMultiple";

export const searchActions: Actions = {
    SearchLinkMultipleAll: async (payload: any) => {
        const data = await SearchLinkMultipleAllData(
            payload.searchQuery,
            payload.token,
            payload.caller,
            payload.format
          );
        return { success: true, data }
    }
}