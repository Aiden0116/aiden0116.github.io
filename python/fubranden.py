import pygame, sys
from settings import *

from level import Level

#from debug import debug

class Game: 
    def __init__(self):

        pygame.init()
        self.screen = pygame.display.set_mode((Width,Height))
        pygame.display.set_caption('Scary Puzzle :)')
        self.clock = pygame.time.Clock()

        self.level = Level()
        
    def run(self):
        while True: 
            for event in pygame.event.get():
                if event.type == pygame.QUIT:
                    pygame.quit()
                    sys.exit()

            self.screen.fill('orange')
            self.level.run()
            #debug('test :/')

            pygame.display.update()
            self.clock.tick(FPS)

if __name__ == '__main__':
    game = Game()
    game.run()