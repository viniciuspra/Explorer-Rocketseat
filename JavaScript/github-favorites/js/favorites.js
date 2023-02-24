export class GithubUser {
  static async search(username) {
    const endpoint = `https://api.github.com/users/${username}`
    const data = await fetch(endpoint)
    const { login, name, public_repos, followers } = await data.json()
    return ({
      login,
      name,
      public_repos,
      followers,
    })
  }
}

export class Favorites {
  constructor(root) {
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || []
  }

  async add(username) {
    try {
      const user = await GithubUser.search(username)
      console.log(user);
      if (user.login === undefined) {
        throw new Error(`User not found!`)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  delete(user) {
    this.entries = this.entries.filter((entry) => entry.login !== user.login)
    this.update()
  }
}

export class FavoritesView extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector("table tbody")
    this.update()
    this.onadd()
  }

  onadd() {
    const addButton = this.root.querySelector('.search button')
    addButton.onclick = () => {
      const { value } = this.root.querySelector('.search input')
      this.add(value)
    }
  }

  update() {
    this.removeAllTr()
    this.entries.forEach((user) => {
      const row = this.createRow()

      row.querySelector(
        ".user img"
      ).src = `https://github.com/${user.login}.png`
      row.querySelector(".user img").alt = `Imagem de ${user.name}`
      row.querySelector(".user a").href = `https://github.com/${user.login}`
      row.querySelector(".user p").textContent = user.name
      row.querySelector(".user span").textContent = "/" + user.login
      row.querySelector(".repositories").textContent = user.public_repos
      row.querySelector(".followers").textContent = user.followers

      row.querySelector(".remove").onclick = () => {
        const isOk = confirm(
          "Tem certeza de que deseja remover esse usuário de seus favoritos?"
        )
        if (isOk) {
          this.delete(user)
        }
      }

      this.tbody.append(row)
    })
  }

  createRow() {
    const tr = document.createElement("tr")

    tr.innerHTML = `
        <td class="user">
          <img src="https://github.com/viniciuspra.png" alt="">
          <a href="https://github.com/viniciuspra" target="_blank">
            <p>Vinicius Pra</p>
            <span>viniciuspra</span>
          </a>
        </td>
        <td class="repositories">
          16
        </td>
        <td class="followers">
          9
        </td>
        <td>
          <button class="remove">Remover</button>
        </td>
        `

    return tr
  }

  removeAllTr() {
    this.tbody.querySelectorAll("tr").forEach((tr) => {
      tr.remove()
    })
  }
}
