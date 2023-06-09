import styled from 'styled-components';
import Layout from '../Components/Layout';
import MainContent from '../Components/MainContent';
import { useThemeContext } from '../context/themeContext';
import Game from '../Components/Game';
import { useStatsContext } from '../context/context';
import Button from '../Components/Button';
import { down } from '../utilts/Icons';

export default function Home() {
  const theme = useThemeContext();
  const { searching, games, homepage_games, increasePagesize, fetchClickedGame, openModal } = useStatsContext();

  const handleAddToMyList = (gameId) => {
    // Implement the logic to add the game ID to MongoDB
    console.log(`Add game with ID ${gameId} to MongoDB`);
  };

  return (
      <div>
        <Layout>
          <MainContent>
            <HomepageStyled>
              <div className="home-items">
                {!searching &&
                    homepage_games.map((game) => {
                      return (
                          <Game
                              key={game.id}
                              values={{ ...game }}
                              click={() => {
                                fetchClickedGame(game.id);
                                openModal(game.id);
                              }}
                          >
                            <Button
                                name="Add to My List"
                                padding=".5rem 1rem"
                                borderRad="10px"
                                fw="bold"
                                fs="1rem"
                                icon={null}
                                background={theme.colorPrimary}
                                click={() => handleAddToMyList(game.id)}
                            />
                          </Game>
                      );
                    })}
                {searching &&
                    games.map((game) => {
                      return (
                          <Game
                              key={game.id}
                              values={{ ...game }}
                              click={() => {
                                fetchClickedGame(game.id);
                                openModal(game.id);
                              }}
                          >
                            <Button
                                name="Add to My List"
                                padding=".5rem 1rem"
                                borderRad="10px"
                                fw="bold"
                                fs="1rem"
                                icon={null}
                                background={theme.colorPrimary}
                                click={() => handleAddToMyList(game.id)}
                            />
                          </Game>
                      );
                    })}
              </div>
              <div className="load-more">
                <Button
                    name={'Load More'}
                    blob={'blob'}
                    padding={'.7rem 1.2rem'}
                    borderRad={'10px'}
                    fw={'bold'}
                    fs={'1.2rem'}
                    icon={down}
                    background={theme.colorPrimary}
                    click={increasePagesize}
                />
              </div>
            </HomepageStyled>
          </MainContent>
        </Layout>
      </div>
  );
}

const HomepageStyled = styled.div`
  .home-items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
    grid-gap: 2rem;
  }
`;