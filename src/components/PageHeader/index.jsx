import { PageHeaderContainer } from "./styles";
import { FaChevronLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export function PageHeader({ title, subtitle, ...rest }) {
  const navigate = useNavigate();

  function handleGoBack() {
    navigate(-1);
  }

  return (
    <PageHeaderContainer {...rest}>
      <div>
        <FaChevronLeft size={25} onClick={handleGoBack} />
        <h1>{title}</h1>
      </div>
      <p>{subtitle}</p>
    </PageHeaderContainer>
  );
}
