
## yhangry technical task - Laravel / React

This is a task just to understand some basic knowledge of laravel, react, database structure and your approach to a task.

# Set up
- Make sure you're running PHP 8.1+
- Test uses Laravel 9
- Clone down the repository
- Copy the `.env.example` file to `.env`
- Install the composer dependancies
- Install the frontend dependancies
- Feel free to use your own dev environment or use the one provided.
    - It has Laravel Sail installed, to use this run `./vendor/bin/sail up -d`
    - This will create your containers
    - Then you can run any commands in that container eg. `./vendor/bin/sail php artisan migrate`
- Run any outstanding migrations



# The task
We have a mock API here:
https://staging.yhangry.com/booking/test/set-menus

This includes a list of menus

1. I want you to create a command that stores this data into a menus table table
2. Store unique cuisines from this list creating the relationship between the menu and cuisine
3. Then I want you to create an API that lists the most 5 most popular menus in each cuisine
4. Create a frontend view using React that then calls this API and displays these menus on the page
5. Create filters so the user can select a cuisine and then this shows all menus within that cuisine ordered by the most popular

Don't spend more than a couple hours on this, it's not a race to complete.


