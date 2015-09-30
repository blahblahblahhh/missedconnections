class WelcomeController < ApplicationController

  include Api::ConnectionsHelper

  def index
    @connections = Connection.all
    # render json: @connections
  end

  def a
    @connections = Connection.search('a')
  end

  def c
    @connections = Connection.search('c')
  end

end
