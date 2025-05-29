import { Container } from "@/common/components/container";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className="bg-black mt-52 py-12">
      <Container>
        <div className="flex justify-evenly flex-wrap gap-8">
          <div>
            <Image
              src={"/assets/logo-dourada.svg"}
              alt="Logo"
              width={200}
              height={50}
            />
            <div className="flex flex-col gap-4 mt-8">
              <p className="text-white">Contato:</p>
              <div className="flex gap-4 items-center">
                <FontAwesomeIcon className="text-subtitle" icon={faEnvelope} />
                <p className="text-white">lbbpereira.b@gmail.com</p>
              </div>
              <div className="flex gap-4 items-center">
                <FontAwesomeIcon icon={faPhone} className="text-subtitle" />
                <p className="text-white">+55 11 99999-9999</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white">Site:</p>
            <Link
              href="#sobre"
              className="text-white cursor-pointer hover:text-subtitle"
            >
              Sobre
            </Link>
            <Link
              href="#areas"
              className="text-white cursor-pointer hover:text-subtitle"
            >
              Áreas
            </Link>
            <Link
              href="#relatos"
              className="text-white cursor-pointer hover:text-subtitle"
            >
              Relatos
            </Link>
            <Link
              href="#duvidas"
              className="text-white cursor-pointer hover:text-subtitle"
            >
              Dúvidas
            </Link>
            <Link
              href="#contato"
              className="text-white cursor-pointer hover:text-subtitle"
            >
              Contato
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-white font-semibold">
              Me encontre nas redes sociais
            </p>
            <div className="flex gap-4">
              <FontAwesomeIcon icon={faInstagram} className="text-subtitle" />
              <FontAwesomeIcon icon={faFacebook} className="text-subtitle" />
            </div>
          </div>
        </div>
      </Container>
      <div className="text-center text-subtitle mt-8 border-t border-gray-700 pt-4">
        <p>© 2025 Laís Pontes. Todos os direitos reservados.</p>
        <p>Desenvolvido por Brendha Barbosa.</p>
      </div>
    </div>
  );
}

export default Footer;
