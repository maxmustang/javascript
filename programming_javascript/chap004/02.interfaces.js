// page 73
//   Interfaces
//     Interfaces desing a contract that an implementing module will fulfill.
//
//     Example:
//       My software create Post, it will try to save then in`localStorage` if avalible or in cookies and stuff if its not
//       I cant call `localStorage` directly cause my business logic should not dependes on my infrastructure
//       Wrong way:
//         Posts ---> localStorage
//       A better alternative is to have a interface to provide data access for the post module. That way, the module can
//       save the Post using the same interface for both localStorage and cache
//         Posts ---> <<interface Post data provider>> ---> localStorage or Cache
//
//   In javascript there is no distinction between classes, interfaces and object instance. There are only object instances

  function factory() {
    let ns = 'post', supportsLocalStorage = (typeof localStorage !== 'undefined' ) && localStorage != null, storage

    const storageInterface = { save() { throw new Error('.save() should be implemented') } }
    const cookieProvider = Object.assign(storageInterface, { save(){ console.log('salvando no cookie') }} )
    const localStorageProvider = Object.assign(storageInterface, { save(){ console.log('salvando local') }} )

    storage = (supportsLocalStorage) ? localStorageProvider : cookieProvider
    const postProtype = {
      save(id) {
        storage[id] = this.data
        storage.save()
        return this;
      },
      set(name, value) {
        this.data[name] = value
        return this;
      },
      data: {
        message:'',
        published: false
      }
    }

    const post = Object.create(postProtype)
    const api = post


    return api
  }


const test = require('tape')

test('implementing interface', t => {
  let myPost = factory()
  myPost.set('message', 'ha')
  myPost.save(1)
  t.equal(myPost.data.message, 'ha')
  t.end()
})
