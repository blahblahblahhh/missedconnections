class WelcomeController < ApplicationController

  include Api::ConnectionsHelper

  def index
    @connections = Connection.all
    # render json: @connections
  end

  def a
    @connections = Connection.search('a')
  end

end
