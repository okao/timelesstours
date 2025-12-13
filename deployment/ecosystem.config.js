module.exports = {
	apps: [
		{
			name: 'thetimelesstours',
			script: 'npx',
			args: 'serve -s dist -l 3000',
			instances: 1,
			autorestart: true,
			watch: false,
			max_memory_restart: '1G',
			env: {
				NODE_ENV: 'production',
				PORT: 3000,
			},
			error_file: '/var/log/pm2/thetimelesstours-error.log',
			out_file: '/var/log/pm2/thetimelesstours-out.log',
			log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
		},
	],
};
