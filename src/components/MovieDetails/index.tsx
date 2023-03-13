import { Movie } from '@/types/types';
import { BackLink, Container, InfoTable, Poster, Title } from './MovieDetails.tyled';

interface MovieDetailsProps {
  movie: Movie;
}

const MovieDetails = ({ movie }: MovieDetailsProps) => {
  const movieInfoItems = [
    { label: 'Year', value: movie.Year },
    { label: 'Rated', value: movie.Rated },
    { label: 'Released', value: movie.Released },
    { label: 'Runtime', value: movie.Runtime },
    { label: 'Genre', value: movie.Genre },
    { label: 'Actors', value: movie.Actors },
    { label: 'Plot', value: movie.Plot },
    { label: 'Language', value: movie.Language },
    { label: 'Country', value: movie.Country },
    { label: 'IMDB Rating', value: movie.imdbRating },
  ];

  return (
      <Container>
          <BackLink href="/">Back to search</BackLink>
      <Title>{movie.Title}</Title>
      <Poster
        src={movie.Poster === 'N/A' ? '/noImagePlaceholder.png' : movie.Poster}
        width={300}
        height={450}
        alt={movie.Title}
      />
      <InfoTable>
        <tbody>
          {movieInfoItems.map(({ label, value }) => (
            <tr key={label}>
              <td>{label}</td>
              <td>{value === 'N/A' ? 'no info' : value}</td>
            </tr>
          ))}
        </tbody>
      </InfoTable>
    </Container>
  );
};

export default MovieDetails;

