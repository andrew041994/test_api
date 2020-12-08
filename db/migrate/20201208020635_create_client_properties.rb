class CreateClientProperties < ActiveRecord::Migration[6.0]
  def change
    create_table :client_properties do |t|
      t.belongs_to :client 
      t.belongs_to :property
      t.timestamps
    end
  end
end
