from bs4 import BeautifulSoup
import pandas as pd
import urllib
import os
import re
os.chdir('/home/helios/Documents/nodeFiles/fight-card-/scraping')

# Open the main page with events listed
sock = urllib.urlopen('http://www.ufc.com/schedule')
page = sock.read()
soup = BeautifulSoup(page)

# Scrape event URLs from the main page
event_urls = []
div = soup.find(id='event_content')
arrows = div.findChildren('div', {'class' : 'btn-ltgray-arrow'})
for a in arrows:
    link = a.findChildren('a')
    event = link[0].get('href')
    event_urls.append('http://www.ufc.com' + event)
# Pull Fight URLs from each Event URL
match = {'fighter': 'foo', 'opponent': 'bar', 'weight class' : 'baz'}
matches = []
print matches
iter = 0
for event_url in event_urls: 
    try:
        sock = urllib.urlopen(event_url)
        event_html = sock.read()
        event_soup = BeautifulSoup(event_html)

        head = event_soup.select('#titleArea')
        head_content = head[0]
        head_list = head_content.prettify().splitlines()
        event_name = head_list[1]
        event_date = head_list[4]
        fighters = head_list[7]
        event_strip = event_date[5:]
        event_list = event_strip.split(' ')
        unabbri = ""
        short_months = ["Jan.", "Feb.", "Mar.", "Apr.", "May", "Jun.", "Jul.", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]
        full_months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

        for i in range(0, len(short_months)):
            if event_list[1] == short_months[i]:
                unabbri = full_months[i]
        query_date = unabbri + event_date[10:]


        fightmetric = urllib.urlopen('http://www.fightmetric.com/statistics/events/upcoming?page=all')
        fmpage = fightmetric.read()
        fightsoup = BeautifulSoup(fmpage)
        scrape_url = fightsoup.select('.b-link_style_black')
        url_href = scrape_url[iter].get('href')

        event_metric =  urllib.urlopen(url_href)
        metric_html = event_metric.read()
        metric_soup = BeautifulSoup(metric_html)
        trs = metric_soup.find_all('tr')
        tds = metric_soup.find_all('td')
        for tr in trs:
            tdIter = 0
            for td in tr:
                if tdIter == 3:
                    anchor = td.findChildren('a')
                    chiter = 0
                    for child in anchor:
                        if chiter == 0:
                            fighter_strip = re.sub('^[^a-zA-z]*|[^a-zA-Z]*$','', child.text)
                            match['fighter'] = fighter_strip
                        elif chiter == 1:
                            opponent_strip = re.sub('^[^a-zA-z]*|[^a-zA-Z]*$','', child.text)
                            match['opponent'] = opponent_strip
                        chiter += 1
                elif tdIter == 13:
                    weightclass = td.findChildren('p')
                    for child in weightclass:
                        weight_strip = re.sub('^[^a-zA-z]*|[^a-zA-Z]*$','', child.text)
                        match['weight class'] = weight_strip
                    print match
                    matches.append(match)
                tdIter += 1

        iter += 1
    
    except IOError:
        pass

# Save fight URLs to a csv file
matches = pd.DataFrame(matches, columns=['fighter', 'opponent', 'weight class'])
print matches
event_urls = pd.DataFrame(event_urls, columns=['link'])
matches.to_csv('matches.csv', index=False)
event_urls.to_csv('event urls.csv', index=False)

