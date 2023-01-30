export default function ButtonModal ({buttonText}) {
  return (
    <button
      type="submit"
      id="button-cadastrar"
      onclick="validate(email, senha, confirmarSenha)"
    >
      {buttonText}
    </button>
  )
}