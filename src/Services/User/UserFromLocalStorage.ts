export function getUserDetails() {
    let userDetails = {
        'entity': 0,
        'userConcept': 0,
        'userId': 0,
        'token': ""
      };
      try{
      let dataFromLocalStorage: string = localStorage?.getItem("profile") || "";
      if (dataFromLocalStorage) {
        const profileData = JSON.parse(dataFromLocalStorage);
        userDetails.entity = profileData?.entityId ?? 0;
        userDetails.userConcept = profileData?.userConcept ?? 0;
        userDetails.userId = profileData?.userId ?? 0;
        userDetails.token = profileData?.token ?? "";
      } 
      }
      catch(exception){
        console.log("This is the exception in getting user details from local storage");
      }
    return userDetails;
  }