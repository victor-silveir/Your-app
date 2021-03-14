import { Span } from "../basic components/span/styles";
import { FooterBar, Footr, Profile, ProfileContent, Profilelogo, SocialIcons } from "./styles";
import { AiFillGithub } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi'
function Footer() {
    return (
        <Footr>
            <FooterBar>
                <Profile>
                    <Profilelogo src="https://github.com/victor-silveir.png" />
                    <ProfileContent>
                        <Span Color="white" fontSize="1.125" fontWeight="500">Victor Bruno Alves de Feitas Silveira</Span>
                        <Span Color="#a1a1a1" fontSize="1">Java developer</Span>
                    </ProfileContent>
                </Profile>
                    <SocialIcons>    
                        <a href="mailto:vbf.silveira@gmail.com">
                        <FiMail size={25}/>
                        </a>
                        <a href="https://github.com/victor-silveir/CRUD-Spring-Next.Js-Frontend">   
                        <AiFillGithub size={25} />
                        </a>
                    </SocialIcons>
            </FooterBar>
        </Footr>
    )
}

export default Footer;
