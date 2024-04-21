
import { recursiveFetchNew } from '../../Services/Composition/BuildComposition';
import { Connection } from '../../DataStructures/Connection';
import { Concept } from '../../DataStructures/Concept';
import { CreateDefaultConcept } from '../../Services/CreateDefaultConcept';
import { publishMessage } from '../../Services/Mqtt/publishMessage';
export class Composition {
  // we can build a composition using this class
  id: number = 0
  mainConcept: Concept = CreateDefaultConcept()
  connections: Connection[] = []
  concepts: Concept[] = []
  subcompositions: number[] = []
  cached: any = {}

  async updateCache() {
    if (this.mainConcept.id == 0)
      for (let i = 0; i < this.concepts.length; i++) {
        if (this.concepts[i].id == this.id) {
          this.mainConcept = this.concepts[i]
        }
      }
    this.cached = await recursiveFetchNew(
      this.id,
      this.connections,
      this.concepts,
      this.subcompositions,
    )
  }

  UpdateAcrossDistributedSystem() {
    try {
      if (this.id != 0) {
        publishMessage('compositionUpdate', this.id?.toString())
      }
    } catch (ex) {
      console.log('Error while publishing message', ex)
    }
  }

  isUpdating() {
    this.UpdateAcrossDistributedSystem()
  }

  GetDataCache() {
    const returnOutput: any = {}
    const mainString = this.mainConcept?.type?.characterValue ?? ''
    returnOutput[mainString] = this.cached
    const FinalReturn: any = {}
    FinalReturn['data'] = returnOutput
    FinalReturn['id'] = this.id
    return FinalReturn
  }
}
