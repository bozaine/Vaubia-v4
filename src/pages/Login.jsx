export default function Login(){
  return (
    <section>
      <h1>Connexion</h1>
      <form>
        <label>Email</label>
        <input type="email" />
        <label>Mot de passe</label>
        <input type="password" />
        <button>Se connecter</button>
      </form>
    </section>
  );
}