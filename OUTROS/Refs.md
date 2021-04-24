## REFS
- Criar uma referencia no objeto que queremos manipular

- Exemplo para manipulação de audio:
  - const audioRef = `useRef<HTMLAudioElement>(null)`
    ##### com isso sabemos oque podemos utilizar em questão de metodos e propriedades

- todo elemento Html recebe a propriedade REF

`{ episode && (
        <audio 
          src={episode.url}
          ref={audioRef}
          autoPlay
        />         
  )}`

#### Toda variavel no REACT possui o valor da referencia
- audioRef.current

#### Manipulando estado play pelo teclado tambem
`{ episode && (
  <audio 
    src={episode.url}
    ref={audioRef}
    autoPlay
    onPlay={() => setIsPlayingState(true)}
    onPause={() => setIsPlayingState(false)}
  />         
)}`

