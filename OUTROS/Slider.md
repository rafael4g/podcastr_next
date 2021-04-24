### SLIDER

- Lib utilizada para css do slider:
`yarn add rc-slider`
- Para utiliza-la
 - import `Slider` from 'rc-slider';
 - import `'rc-slider/assets/index.css'`;

#### PROPRIEDADES DO SLIDER

TAG `<Slider>` <br /> 
  - altera a cor do progresso <br />
    trackStyle={{ backgroundColor: '#04d361'}} <br /> <br /> 
  - a cor de fundo da barra que não sofreu progresso <br />
    railStyle={{ backgroundColor: '#9f75ff'}} <br /> <br /> 
  - a cor da bolinha  <br />
    handleStyle={{ borderColor: '#04d361', borderWidth: 4 }} <br /> <br /> 

  - duração maxima <br /> 
    max={episode.duration} <br /> <br /> 
  - valor atual da duração do episodio <br /> 
    value={progress} <br /> <br /> 
  - opção para habilitar a movimentação da bolinha com o cursor <br /> 
    onChange={handleSeek} <br /> <br />   
