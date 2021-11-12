exports.seed = async function (knex) {
    await knex('users').truncate()

    await knex('users').insert([
        {
            username: 'bob',
            password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"
        },
        {
        username: 'sue',
        password: '$2a$10$dFwWjD8hi8K2I9/Y65MWi.WU0qn9eAVaiBoRSShTvuJVGw8XpsCiq', // password "1234"

        },
        {
        username: 'egatica51',
        password: 'manny', // password "1234"

        }
    ])
}