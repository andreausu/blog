require "capistrano/node-deploy"
require "capistrano/shared_file"

set :application, "blog-usu"
set :user, "usu"
set :deploy_to, "/home/usu/blog"

set :node_user, "usu"
set :node_env, "production"

ssh_options[:port] = 91

set :scm, :git
set :branch, fetch(:branch, "master")
set :repository,  "https://github.com/andreausu/blog.git"
set :deploy_via, :rsync_with_remote_cache
set :rsync_options, "-az --delete --exclude=provisioning/"

role :app, fetch(:host, "188.226.242.171")

set   :shared_files,        ["config.js", "newrelic.js"]
set   :shared_children,     ["content/data", "content/images"]

set   :keep_releases, 5

namespace :deploy do
  task :mkdir_shared do
    run "cd #{shared_path} && mkdir -p data images files"
  end
end

after "deploy:create_symlink", "deploy:mkdir_shared"
after "deploy:update", "deploy:cleanup"