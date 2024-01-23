import styled from "styled-components";

interface InfoCardProps {
  backgroundColor: string | undefined;
}

export const StyledInfoCard = styled.div<InfoCardProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  height: 40vh;
  border-top-right-radius: 64px;
  border-top-left-radius: 64px;
  background-color: ${(props: InfoCardProps) => props.backgroundColor};

  @media (max-width: 768px) {
    width: 80vw;
    height: 30vh;
  }


  #shape {
    margin-top: -13%;
}


& .wave-img:nth-child(4) {
    opacity: 0.4;
    margin-top: -15%;
    animation: move-1 5s infinite;
}

@keyframes move-1 {
    50% {
        transform: translateY(15px);
    }

}

& .wave-img:nth-child(5) {
    opacity: 0.3;
    margin-top: -12%;
    animation: move-2 4s infinite;
}


@keyframes move-2 {
    50% {
        transform: translateY(35px);
    }

}

& .wave-img:nth-child(6) {
    opacity: 0.2;
    margin-top: -12%;
    animation: move-3 3.5s infinite;
}

@keyframes move-3 {
    50% {
        transform: translateY(25px);
    }

}

& .wave-img:nth-child(7) {
    opacity: 0.3;
    margin-top: -12%;
    animation: move-4 3s infinite;
}

@keyframes move-4 {
    50% {
        transform: translateY(20px);
    }

}

@media (min-width: 992px) and (max-width: 1440px) {
    & .wave-img:nth-child(4) {
        margin-top: -17%;
    }
}

@media (min-width: 768px) and (max-width: 992px) {
    #shape {
        margin-top: -14%;
    }

    & .wave-img:nth-child(4) {
        margin-top: -18%;
    }
}

@media (min-width: 576px) and (max-width: 768px) {
    #shape {
        margin-top: -15%;
    }

    & .wave-img:nth-child(4) {
        margin-top: -20%;
    }
}

@media (max-width: 576px) {
    & .wave-img:nth-child(4) {
        margin-top: -25%;
    }
}
`;
