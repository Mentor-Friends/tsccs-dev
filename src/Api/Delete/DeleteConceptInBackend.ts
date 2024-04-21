import { BaseUrl } from "../../DataStructures/BaseUrl"

export  async function TrashTheConcept(
    id: number,
    token: string,
  ) {
    try {
      const myHeaders = new Headers()
      myHeaders.append('Authorization', 'Bearer ' + token)
      const formdata = new FormData()
      formdata.append('id', id.toString())
      const response = await fetch(BaseUrl.DeleteConceptUrl(), {
        method: 'POST',
        body: formdata,
        headers: myHeaders,
      })
      if (!response.ok) {
        throw new Error(`Delete composition Error! status: ${response.status}`)
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log('Delete composition error message: ', error.message)
        return error.message
      } else {
        console.log('Delete composition unexpected error: ', error)
        return 'An unexpected error occurred'
      }
    }
  }