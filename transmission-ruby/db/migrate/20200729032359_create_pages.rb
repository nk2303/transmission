class CreatePages < ActiveRecord::Migration[6.0]
  def change
    create_table :pages do |t|
      t.string :url_key
      t.text :content

      t.timestamps
    end
  end
end
